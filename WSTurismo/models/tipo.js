module.exports = function(sequelize, DataTypes){
	return sequelize.define('tipo', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'tipo',
		timestamps: false
	});
};