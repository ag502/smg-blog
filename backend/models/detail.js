module.exports = (sequelize, DataTypes) => {
    return sequelize.define('detail', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        content: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    });
};
