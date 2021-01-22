// Creating song model
module.exports = function(sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tempo: {
      type: DataTypes.INTEGER,
      validate: {
        max: 200,
        min: 60,
        isNumeric: true
      }
    },
    songkey: {
      type: DataTypes.STRING
      // validate: {
      //isNumeric: false
      //}
    },
    chords: {
      type: DataTypes.TEXT
    },
    lyrics: {
      type: DataTypes.TEXT
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  Song.associate = function(models) {
    Song.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Song;
};
