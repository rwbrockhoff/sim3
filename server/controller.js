module.exports = {
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
        let {username, password} = req.body;

        dbInstance.create_user(username, password).then( (res) => {
            
            res.sendStatus(200);
        })
    }, 
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let {username, password} = req.body;
        dbInstance.login_user(username, password).then( user => {
            
            res.status(200).send(user);
        })
    },
    getposts: (req,res,next) => {
        const dbInstance = req.app.get('db');
        let {userid} = req.params;
        dbInstance.get_posts(userid).then( posts => {
            console.log(posts)
            res.status(200).send(posts);
        })
    }
}