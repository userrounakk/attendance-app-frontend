type props = { password:string}

export default function PasswordField({password}:props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="">Password</label>
      <input className="border-2" type="text" value={password} />
    </div>
  );
}
