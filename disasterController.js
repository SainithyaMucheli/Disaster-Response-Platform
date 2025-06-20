exports.createDisaster = (req, res) => {
    // Add logic to create disaster
    res.json({ message: "Disaster created" });
};

exports.getDisasters = (req, res) => {
    // Add logic to retrieve disasters
    res.json([{ id: 1, title: "Sample Disaster", location_name: "NYC" }]);
};