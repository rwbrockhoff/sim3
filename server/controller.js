module.exports = {
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
        let {username, password} = req.body;

        dbInstance.create_user(username, password).then( () => {
            res.sendStatus(200);
        })
    }, 
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let {username, password} = req.body;
        dbInstance.login_user(username, password).then( () => {
            res.sendStatus(200)
        })
    }
}