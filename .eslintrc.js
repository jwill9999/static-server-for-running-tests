module.exports = {
    
    "env": {
        "mocha": true
    },
    "extends":[ 
        "airbnb-base",
        "prettier"
        ],
        "plugins": [   
            "import",        
            "prettier"  
          ],
        "rules": {
           "prettier/prettier": "error",
           "linebreak-style": ["error", "windows"],
           "no-console": 0,
           "radix": 0,
           "no-param-reassign": 0
           
        },
        "overrides": [
            {
                "files": ["*.spec.js", "*.test.js"],
                "rules": {
                    "no-unused-expressions": 0
                }
            }
        ]
   
  
};