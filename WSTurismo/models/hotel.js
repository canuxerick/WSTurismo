module.exports = function(sequelize, DataTypes){
	return sequelize.define('hotel', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lugar: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		precio: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'hotel',
		timestamps: false
	});
};