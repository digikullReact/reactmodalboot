import React, { useState } from 'react';

function AddModal({ addName }) {
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  // function addModalName() {
  //   addName(input)
  // }

  return (
    <div>
      {/* ============================[ Add Modal ]============================ */}

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Restaurant
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Restaurant Name
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                  placeholder="enter restaurant name"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => addName(input)}
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
