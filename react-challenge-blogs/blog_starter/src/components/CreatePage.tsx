import { useState } from "react";


const Create = () => {

  const [title , setTitle] = useState('')

  const handleSubmit = () => {
    // to complete
  }

  return (
    <div className="create">
      <h2>Add a New Blog - Place Holder</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title: </label>
        <input
        id="title"
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

      </form>
    </div>
  );
}
 
export default Create;