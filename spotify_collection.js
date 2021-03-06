db.createCollection('usuari', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'usuari',
        properties: {
          email: {
            bsonType: 'string'
          },
          password: {
            bsonType: 'string'
          },
          username: {
            bsonType: 'string'
          },
          pais: {
            bsonType: 'string'
          },
          codi_postal: {
            bsonType: 'string'
          },
          data_naixement: {
            bsonType: 'date'
          },
          tipus: {
            enum:['free','premium']
          },
          subscripcions: {
            bsonType: 'array',
            items: {
              title: 'subscripcio',
              properties: {
                data_inici: {
                  bsonType: 'date'
                },
                data_renovacio: {
                  bsonType: 'date'
                },
                forma_pagament: {
                  bsonType: 'object',
                  title: 'pagament',
                  properties: {
                    forma: {
                      bsonType: 'string'
                    },
                    num_targeta: {
                      bsonType: 'string'
                    },
                    csv: {
                      bsonType: 'string'
                    },
                    mes_any_caducitat: {
                      bsonType: 'string'
                    },
                    nom_usuari_paypal: {
                      bsonType: 'string'
                    }
                  }
                },
                pagaments: {
                  bsonType: 'array',
                  items: {
                    title: 'pagament',
                    properties: {
                      num_ordre: {
                        bsonType: 'int'
                      },
                      data: {
                        bsonType: 'date'
                      },
                      total: {
                        bsonType: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          can??ons_preferides: {
            bsonType: 'array',
            items: {
              title: 'canc??o_preferida',
              required: ['id_can??o', 'artista'],
              properties: {
                id_can??o: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                artista: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          albums_preferits: {
            bsonType: 'array',
            items: {
              title: 'album_preferit',
              required: ['id_album', 'artista'],
              properties: {
                id_album: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                artista: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          playlists: {
            bsonType: 'array',
            items: {
              title: 'playlist',
              required: ['id_playlist'],
              properties: {
                id_playlist: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                data_creacio: {
                  bsonType: 'date'
                },
                data_eliminacio: {
                  bsonType: 'date'
                },
                esEliminada: {
                  bsonType: 'bool'
                },
                num_can??ons: {
                  bsonType: 'int'
                },
                can??ons: {
                  bsonType: 'array',
                  items: {
                    title: 'can??o_afegida',
                    properties: {
                      titol: {
                        bsonType: 'string'
                      },
                      artista: {
                        bsonType: 'objectId'
                      },
                      usuari_que_afageix_can??o: {
                        bsonType: 'objectId'
                      },
                      id_can??o: {
                        bsonType: 'objectId'
                      }
                    }
                  }
                }
              }
            }
          },
          artistes_que_segueix: {
            bsonType: 'array',
            items: {
              title: 'artistes_que_segueix',
              required: ['artista'],
              properties: {
                nom: {
                  bsonType: 'string'
                },
                artista: {
                  bsonType: 'objectId'
                }
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  db.createCollection('artista', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'artista',
        properties: {
          nom: {
            bsonType: 'string'
          },
          img: {
            bsonType: 'string'
          },
          artistes_relacionats: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          },
          albums: {
            bsonType: 'array',
            items: {
              title: 'album',
              required: ['id_album'],
              properties: {
                id_album: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                img: {
                  bsonType: 'string'
                },
                any_publicacio: {
                  bsonType: 'date'
                },
                can??ons: {
                  bsonType: 'array',
                  items: {
                    title: 'canc??o',
                    required: ['id_can??o'],
                    properties: {
                      id_can??o: {
                        bsonType: 'objectId'
                      },
                      titol: {
                        bsonType: 'string'
                      },
                      durada: {
                        bsonType: ['decimal','double','string']
                      },
                      num_reproduccions: {
                        bsonType: 'int'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  