router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
        where: {
        email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
        }
    
        // res.json({ user: dbUserData });
    
        // Verify user
    
    });  
});