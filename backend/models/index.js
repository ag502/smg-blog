const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const User = require('./user')(sequelize, Sequelize);
const Overview = require('./overview')(sequelize, Sequelize);
const Detail = require('./detail')(sequelize, Sequelize);
const Comment = require('./comment')(sequelize, Sequelize);

User.hasMany(Overview, { foreignKey: 'userId', sourceKey: 'id' });
Overview.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

Detail.belongsTo(Overview, { foreignKey: 'postId', targetKey: 'id', onDelete: 'cascade' });
Overview.hasOne(Detail, { foreignKey: 'postId', targetKey: 'id' });

Detail.hasMany(Comment, { foreignKey: 'postId', sourceKey: 'postId' });
Comment.belongsTo(Detail, { foreignKey: 'postId', targetKey: 'postId' });

module.exports = db;
