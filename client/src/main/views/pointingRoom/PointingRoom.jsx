import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import searchParamOptions from "../../utils/consts/searchParamOptions";
import "./styles/pointingRoom.css";

const socket = io("http://localhost:3001"); // Replace with your server URL

const ChatRoom = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const room = searchParams.get(searchParamOptions.ROOM);
  console.log(room);

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (!room) {
      return;
    }
    // Join the room
    // Change to name & room
    socket.emit("joinRoom", room);

    // Receive user list when joining the room
    socket.on("userList", (users) => {
      setUsers(users);
      setUserId(socket.id); // Set the user ID once connected
    });

    // Receive notification when a user joins
    socket.on("userJoined", (newUserId) => {
      console.log("new user joined");
      setUsers((prevUsers) => [...prevUsers, newUserId]);
    });

    // Receive notification when a user leaves
    socket.on("userLeft", (leftUserId) => {
      setUsers((prevUsers) => prevUsers.filter((id) => id !== leftUserId));
    });

    // Clean up on unmount
    return () => {
      socket.off("userList");
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }, [room]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showVoteButtonOnClick = () => {
      setIsModalOpen(true);
    }

  return (
    <>
    <div class="mainPointingPageColumn">
      <div class="voteAndButtonWrapper">
        <div class="votes pageDesignBox">
          <h1 class="voteHeader">Vote:</h1>
          <div class="votesWrapper">
            <div class="voteBox activeVoteBox"><p>0</p></div>
            <div class="voteBox"><p>0.5</p></div>
            <div class="voteBox"><p>1</p></div>
            <div class="voteBox"><p>2</p></div>
            <div class="voteBox"><p>3</p></div>
            <div class="voteBox"><p>4</p></div>
            <div class="voteBox"><p>5</p></div>
            <div class="voteBox"><p>6</p></div>
            <div class="voteBox"><p>7</p></div>
            <div class="voteBox"><p>8</p></div>
          </div>
        </div>
        <div class="voteButtons">
          <div><button class="primaryColorButton" onClick={showVoteButtonOnClick}>Show Votes</button></div>
          <div><button class="primaryColorButton">Clear Votes</button></div>
        </div>
      </div>
      <div class="participantsWrapper pageDesignBox">
        <div class="participantsWrapperInner">
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
          <div class="row">
            <div class="participant">Name</div>
            <div class="vote">1</div>
          </div>
        </div>
      </div>

      <div class="inviteWrapper pageDesignBox row">
        <div class="linkBox">Temporary Link Here</div>
        <div><button class="primaryColorButton">Copy Link</button></div>
      </div>
    </div>

{
isModalOpen && (    <div class="modalScreen">
      <div class="modalBox">
        <div class="summaryBox">
          <h1>Round Summary</h1>
        </div>

        <div class="modalInner"></div>
        <div class="modalImage"></div>
      </div>
    </div>)


  
}

    </>
  );
};

export default ChatRoom;
