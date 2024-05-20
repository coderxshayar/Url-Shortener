import shortid from "shortid";
import URL from "../models/Url.js"
import validator from "validator";



// function isValidURL(str) {
//     const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
//         '((([a-zA-Z0-9$-_@.&+!*\\(\\),]|[a-zA-Z0-9]+\\.[a-zA-Z]{2,})+)' + // domain name and extension
//         '(\\:[0-9]{1,5})?' + // port
//         '(\\/.*)?$', 'i'); // path
//     return !!pattern.test(str);
// }

const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body;

    if (!body.url || !validator.isURL(body.url)) {
        return res.status(400).json({ error: "Please provide a valid URL" });
    }
   const ShortId= shortid.generate();

   await URL.create({
    shortId:ShortId,
    redirectUrl:body.url,
    visitHistory:[]
   })

   return res.json({id: ShortId});
}

const UpdateShortUrl= async(req,res)=>{
    const shortId= req.params.ShortId;
    
    const doc = await URL.findOneAndUpdate({shortId},{ $push: {visitHistory: {timestamp: Date.now()}}});
    res.redirect(doc.redirectUrl);
}


export {
    handleGenerateNewShortUrl,
    UpdateShortUrl
}