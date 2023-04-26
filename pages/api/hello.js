export default function handler(req, res) {
    const a = "aa"
    console.log(a);
    console.log(a.match[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/]);
    console.log(process.cwd());
    res.status(200).json({ name: 'John Doe' })
}