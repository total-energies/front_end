export default function ThemeModal(props) {
  return (
      <>
      <h5>Add Owner</h5>
      <div>
          <form
          onSubmit={e => {
              alert("Theme Owner")
              e.preventDefault()
          }}
          >
          <input id="theme" type="text" placeholder="Theme"/>
          <inout id="sub-theme" type="text" placeholder="Owner"/>
          <button>Add Owner</button>
          </form>
      </div>
      </>
  );
}