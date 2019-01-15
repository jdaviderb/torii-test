module.exports = function() {
  return {
    scenarios: [
      {
        name: 'ember-3.5',
        npm: {
          devDependencies: {
            'ember-source': '~3.5.0',
          }
        }
      },
      {
        name: 'ember-3.6-beta-1',
        npm: {
          devDependencies: {
            'ember-source': '3.6.0-beta.1',
          }
        }
      },
      {
        name: 'ember-3.6-beta-2',
        npm: {
          devDependencies: {
            'ember-source': '3.6.0-beta.2',
          }
        }
      },
      {
        name: 'ember-3.6-beta-3',
        npm: {
          devDependencies: {
            'ember-source': '3.6.0-beta.3',
          }
        }
      },
      {
        name: 'ember-3.6-beta-4',
        npm: {
          devDependencies: {
            'ember-source': '3.6.0-beta.4',
          }
        }
      },
      {
        name: 'ember-3.6',
        npm: {
          devDependencies: {
            'ember-source': '~3.6.0',
          }
        }
      },
      {
        name: 'ember-3.7',
        npm: {
          devDependencies: {
            'ember-source': '~3.7.0',
          }
        }
      }
    ]
  }
};
