export default function Contact() {
    return(
        <div className="contact">
            <h3>Contact Us</h3>
            <form >
                <label>
                    <span>Your email:</span>
                    <input type="text" name="email" required />
                </label>
                <label>
                    <span>Your Message</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}