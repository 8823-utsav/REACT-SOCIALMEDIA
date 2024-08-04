import React, { useId } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { Postlist as newadd } from "./store/Postliststore";
export default function Createpost()
{

  const { addpost } = useContext(newadd);

  const useridelement= useRef();
  const posttitleelement= useRef();
  const postBodyelement= useRef();
  const Tagselement= useRef();
  const reactionelement= useRef();

  const handlesubmit = (event) => {
    event.preventDefault();

   const userid = useridelement.current.value;
   const posttitle =posttitleelement.current.value;
   const postBody = postBodyelement.current.value;
   const Tags = Tagselement.current.value;
   const reaction =reactionelement.current.value.split(/(\$+)/);

addpost(userid , posttitle , postBody , reaction , Tags )

}

  return (
    <div>
      <div class="mb-3">
        <label for="userid" class="form-label">
          User id
        </label>
        <input
          type="text"
          class="form-control"
          id="userid"
          ref={useridelement}
          placeholder="write here"
        />
      </div>

      <hr />

      <div class="mb-3">
        <label for="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          class="form-control"
          id="title"
          ref={posttitleelement}
          placeholder="enter  how are you"
        />
      </div>

      <hr />

      <div class="mb-3">
        <label for="body" class="form-label">
          Body
        </label>
        <input
          type="text"
          class="form-control"
          id="body"
          ref={postBodyelement}
          placeholder="enter  how are you"
        />
      </div>

      <hr />

      <div class="mb-3">
        <label for="reaction" class="form-label">
          reaction
        </label>
        <input
          type="text"
          class="form-control"
          id="reaction"
          ref={reactionelement}
          placeholder="enter  how are you"
        />
      </div>
      <hr />

      <div class="mb-3">
        <label for="tag" class="form-label">
          Tag
        </label>
        <input
          type="text"
          class="form-control"
          id="tag"
          ref={Tagselement}
          placeholder="enter  how are you"
        />
      </div>

      <button onClick={handlesubmit}>click <menu type="toolbar"></menu></button>

      {/* <button onClick={handlesubmit()}>submit</button> */}

      <hr />
      {/* <div class="mb-3">
        <label for="reaction" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div> */}
    </div>
  );
}
