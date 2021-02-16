module.exports = function (sequelize, DataTypes) {
    var Contact = sequelize.define("Post", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Contact;
};
