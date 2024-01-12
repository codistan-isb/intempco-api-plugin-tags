
export default function productCount(parent, args, context, info) {
    let { collections } = context;
    let { _id } = parent;
    let { Products } = collections;
    return Products.countDocuments({ "hashtags": { $in: [_id] }, "ancestors": [] });
}
