module.exports = function (sequelize, DataTypes) {
    var Blog = sequelize.define("Blog", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
    });
    return Blog;
};
