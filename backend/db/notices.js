const connectDB = require('../db');

// Function to create a new notice
exports.createNotice = async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db("notee");
    await db.collection('notices').updateOne(
      
    );
    res.status(201).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  } finally {
    client.close();
  }
};

// Function to retrieve all notices for Y2S1
exports.getAllNotices = async (req, res) => {
  const client = await connectDB();

  try {
    const db = client.db("notee");
    const notices = await db.collection('notices').find().toArray();
    if (notices.length > 0) {
      res.json(notices);
    } else {
      res.status(404).json({ message: 'No notices found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  } finally {
    if (client)
    client.close();
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db("notee");
    const { title, course, image, url, desc } = req.body;
    const updatedNotice = { title, course, image, url, desc };
    const result = await db.collection('notices').updateOne(
      { 'Y2S1._id': req.params.id },
      { $set: { 'Y2S1.$': updatedNotice } }
    );
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    res.json(updatedNotice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  } finally {
    client.close();
  }
};