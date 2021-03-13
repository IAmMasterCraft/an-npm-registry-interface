const Nightmare = require('nightmare');
// const nightmare = Nightmare({ show: true });
const nightmare = Nightmare();

exports.package = async(request, response) => {
    nightmare.goto(`https://registry.npmjs.org/${request.params.name}`)
        .evaluate(() => document.body.innerText)
        .end()
        // .then(response => console.log(response))
        .then((result) => {
            // console.log(result);
            if (result.includes("Not found")) {
                response.status(200).json(
                    {
                        success: true,
                        message: `${request.params.name} is available for use as a node package name`,
                    }
                );
            } else {
                response.status(200).json(
                    {
                        success: false,
                        message: `${request.params.name} is NOT available for use as a node package name`,
                    }
                );
            }
        })
        .catch(error => {
            console.error('Search failed:', error)
            response.status(500).json(
                {
                    success: false,
                    message: `something went wrong`,
                }
            );
        });
}