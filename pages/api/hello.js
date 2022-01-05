// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export  function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default function handler(req, res) {
  if (req.method === 'POST') {
    const owner=req.body.owner;
    const newOwner={
        id:Date.now,
        text:owner
    }

    owner.push(newOwner);
    res.status(201).json(newOwner)
  }
}

