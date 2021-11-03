module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        level: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        order: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        group: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
    });
};
