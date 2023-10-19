const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/questions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


const questionSchema = new mongoose.Schema({
  option: String,
  title: String,
  description: String,
  answer: String,

});

const Question = mongoose.model('AllQuestions', questionSchema,'AllQuestions');


// Create models for each collection


const User = mongoose.model('Users', userSchema);

app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.send({savedUser, success : true});
  } catch (error) {
    res.status(500).send({ error: 'User registration failed',success : false});
  }
});









app.post('/run-python', (req, res) => {
    const pythonCode = req.body.code;

    runPythonScript(pythonCode)
      .then(({ output }) => {
        res.status(200).json({ success: true, output });
      })
      .catch(error => {
        res.status(500).json({ success: false, output: null, errorOutput: error.message });
      });
});


  
  // Login route
  app.post('/learn/login', async (req, res) => {
    const { email, password } = req.body;

  try {
    // Find a user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      res.status(401).json({ success : false });
      return;
    }

    // Check if the provided password matches the stored password (you should use a secure password hashing library)
    if (password === user.password) {
      // Passwords match - authentication successful
      res.status(200).json({ success :true , user });
    } else {
      // Passwords do not match
      res.status(401).json({ success : false });
    }
  } catch (error) {
    // Handle any database or server errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
  
app.get('/questions', async (req, res) => {
  const optionToFind = req.query.option;

  try {
    const questions = await Question.find({option : optionToFind });
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
 



























app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

async function runPythonScript(pythonCode) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['-c', pythonCode]);
        let output = '';
        let errorOutput = '';

        pythonProcess.stdout.on('data', data => {
            output += data.toString();
        });

        pythonProcess.stderr.on('data', data => {
            output += data.toString(); // Capture the error output
        });

        pythonProcess.on('close', code => {
            resolve({ output }); // Resolve with both outputs
        });
    });
}
