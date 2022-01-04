export default function ThemeModal(props) {
    return (
        <>
        <h5>Add Theme</h5>
        <div>
            <form
            onSubmit={e => {
                alert("Theme Added")
                e.preventDefault()
            }}
            >
            <input id="theme" type="text" placeholder="Theme"/>
            <inout id="sub-theme" type="text" placeholder="Sub-theme"/>
            <button>Add Theme</button>
            </form>
        </div>
        </>
    );
}