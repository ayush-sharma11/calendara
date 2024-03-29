const router = require("express").Router();
const axios = require("axios");
const csv = require("csv-parser");
const streamifier = require("streamifier");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { parse, isValid, format } = require('date-fns');


// Function to parse date with multiple formats
function parseDate(dateString) {
    // Define an array of possible date formats
    const dateFormats = [
        'MM/dd/yyyy',
        'dd-MM-yyyy',
        'dd/MM/yyyy',
        'dd.MM.yyyy',
        'ddMMyyyy',
        'yyyy/MM/dd',
        'yyyy.MM.dd',
        'dd MMM',
        'dd MMM, yyyy'
    ];

    // Iterate over the formats and attempt to parse the date
    for (const formatStr of dateFormats) {
        const parsedDate = parse(dateString, formatStr, new Date());
        if (isValid(parsedDate)) {
            // Return the parsed date if it's valid
            return format(parsedDate, 'yyyy-MM-dd');
        }
    }

    // If none of the formats match
    return null;
}

router.post("/:userName", upload.single("csvFile"), async (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file was uploaded.");
    }

    // Now you can access the CSV file data using req.file.buffer
    const csvFileData = req.file.buffer.toString();

    const userName = req.params.userName;

    const results = [];
    const stream = streamifier.createReadStream(Buffer.from(csvFileData));

    let isError = false; // Flag to track if an error has occurred

    stream
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", async () => {
            const apiCalls = results.map(async (row) => {
                const title = row.Title;
                let startDate = parseDate(row.Start);
                let endDate = parseDate(row.End);
                const describe = row.Describe;
            
                // Check if startDate or endDate is null (indicating invalid date format)
                if (!startDate || !endDate) {
                    const errorMessage = `Invalid date format for ${title}`;
                    console.error(errorMessage);
                    isError = true;
                    // Send response to the client indicating invalid date format
                    return res.status(400).json({ success: false, message: errorMessage });
                }
            
                console.log(
                    `Title: ${title}, StartDate: ${startDate}, EndDate: ${endDate}, Describe: ${describe}`
                );
            
                try {
                    const response = await axios.post(
                        `http://localhost:55555/api/events`,
                        {
                            admin: userName,
                            title: title,
                            start: `${startDate}T00:00:00.000+00:00`,
                            end: `${endDate}T01:00:00.000+00:00`,
                            describe: describe,
                        }
                    );
                    console.log(`API Response for ${title}:`, response.data);
                } catch (error) {
                    console.error(
                        `Error making API call for ${title}:`,
                        error.message
                    );
                }
            });

            try {
                await Promise.all(apiCalls);
                if (!isError) {
                    res.json({ success: true, message: "API calls completed." });
                }
            } catch (error) {
                console.error("Error in Promise.all:", error);
                res.status(500).json({
                    success: false,
                    message: "Error in API calls.",
                });
            }
        });
});


module.exports = router;
