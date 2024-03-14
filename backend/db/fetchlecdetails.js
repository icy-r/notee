const connectDB = require('../db');

exports.fetchLecDetails = async (req, res) => {
  const client = await connectDB();

  try {
    const db = client.db("notee");
    const lecDetails = await db.collection('lec-links').find().toArray();
    if (lecDetails.length > 0) {
      res.json(lecDetails);
    } else {
      res.status(404).json({ message: 'No lecturers found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  } finally {
    if (client)
    client.close();
  }
}

exports.createLecDetails = async (req, res) => {
    const client = await connectDB();
    
    try {
        const db = client.db("notee");
        const result = await db.collection('lec-links').insertOne(req.body);
        console.log(result); // Add this line
        if (result.acknowledged === true) {
            res.status(201).json({ message: 'Lecturer details created' });
        } else {
            res.status(500).json({ message: 'Failed to create lecturer details' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    } finally {
        if (client)
            client.close();
    }
}