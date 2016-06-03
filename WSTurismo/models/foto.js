module.exports = function(sequelize, DataTypes){
	return sequelize.define('foto', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		archivo: {
			type: DataTypes.STRING,
			allowNull: false
		},
		idFoto: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		}
	}, {
		tableName: 'foto',
		timestamps: false
	});
};