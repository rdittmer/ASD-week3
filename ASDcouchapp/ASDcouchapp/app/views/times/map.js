function ( doc ) {
  if ( doc._id.substr(0, 4) === "time" ) {
    emit(doc._id, { 
        "Options"    : doc.Options,
        "reservist"  : doc.reservist,
        "numberGames": doc.numberGames,
        "location"   : doc.location,
        "date"       : doc.date,
        "notes"      : doc.notes 
    });
  }
};