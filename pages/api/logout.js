export default function LogOut (req, res) {
  res.setHeader('Set-Cookie', `token=; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);
  return res.status(200).json({ message: 'Logout successful' });
};