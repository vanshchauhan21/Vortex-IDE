import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { ModalContext } from '../../context/ModalContext'

const StyledLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #1e1e1e;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        position: relative;
        width: 100%;
    }
`
const ContentContainer = styled.div`
    text-align: center;
`

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;

    span{
        font-weight: 700;
    }
        
/* From Uiverse.io by Navarog21 */ 
button {
  position: relative;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: #ddebf0;
  font-size:1.2rem;
}

#clip {
  --color: #2761c3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
}

button:hover #rightArrow {
  background-color: orange;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
  background-color:orange;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -1.98em;
  left: 91%;
}

#leftTop {
  top: -1.96em;
  left: -3.0em;
}

#leftBottom {
  top: 2.10em;
  left: -2.15em;
}

#rightBottom {
  top: 45%;
  left: 88%;
}

button:hover #leftTop {
  animation: 0.1s ease-in-out 0.05s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
  animation: 0.1s ease-in-out 0.15s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
  animation: 0.1s ease-in-out 0.25s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
  animation: 0.1s ease-in-out 0.35s both changeColor8,
  0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}

@keyframes changeColor8 {
  from {
    background-color: orange;
  }

  to {
    background-color: orange;
  }
}

@keyframes lightEffect8 {
  from {
    box-shadow: 1px 1px 5px #27c39f;
  }

  to {
    box-shadow: 0 0 2px #27c39f;
  }
}

@keyframes greenLight8 {
  from {
  }

  to {
    box-shadow: inset 0px 0px 32px #27c39f;
  }
}

@keyframes leftArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(10px);
  }
}

@keyframes rightArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(-10px);
  }
}



`
const SubHeading = styled.div`
    font-size: 1.5rem;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 1.5rem;
`

const AddNewButton = styled.button`
   
.continue-application {
  --color: #fff;
  --background: #404660;
  --background-hover: #3A4059;
  --background-left: #2B3044;
  --folder: #F3E9CB;
  --folder-inner: #BEB393;
  --paper: #FFFFFF;
  --paper-lines: #BBC1E1;
  --paper-behind: #E1E6F9;
  --pencil-cap: #fff;
  --pencil-top: #275EFE;
  --pencil-middle: #fff;
  --pencil-bottom: #5C86FF;
  --shadow: rgba(13, 15, 25, .2);
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  padding: 17px 29px 17px 69px;
  transition: background 0.3s;
  color: var(--color);
  background: var(--bg, var(--background));
}

.continue-application > div {
  top: 0;
  left: 0;
  bottom: 0;
  width: 53px;
  position: absolute;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
  background: var(--background-left);
}

.continue-application > div .folder {
  width: 23px;
  height: 27px;
  position: absolute;
  left: 15px;
  top: 13px;
}

.continue-application > div .folder .top {
  left: 0;
  top: 0;
  z-index: 2;
  position: absolute;
  transform: translateX(var(--fx, 0));
  transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application > div .folder .top svg {
  width: 24px;
  height: 27px;
  display: block;
  fill: var(--folder);
  transform-origin: 0 50%;
  transition: transform 0.3s ease var(--fds, 0.45s);
  transform: perspective(120px) rotateY(var(--fr, 0deg));
}

.continue-application > div .folder:before, .continue-application > div .folder:after,
.continue-application > div .folder .paper {
  content: "";
  position: absolute;
  left: var(--l, 0);
  top: var(--t, 0);
  width: var(--w, 100%);
  height: var(--h, 100%);
  border-radius: 1px;
  background: var(--b, var(--folder-inner));
}

.continue-application > div .folder:before {
  box-shadow: 0 1.5px 3px var(--shadow), 0 2.5px 5px var(--shadow), 0 3.5px 7px var(--shadow);
  transform: translateX(var(--fx, 0));
  transition: transform 0.4s ease var(--fd, 0.3s);
}

.continue-application > div .folder:after,
.continue-application > div .folder .paper {
  --l: 1px;
  --t: 1px;
  --w: 21px;
  --h: 25px;
  --b: var(--paper-behind);
}

.continue-application > div .folder:after {
  transform: translate(var(--pbx, 0), var(--pby, 0));
  transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application > div .folder .paper {
  z-index: 1;
  --b: var(--paper);
}

.continue-application > div .folder .paper:before, .continue-application > div .folder .paper:after {
  content: "";
  width: var(--wp, 14px);
  height: 2px;
  border-radius: 1px;
  transform: scaleY(0.5);
  left: 3px;
  top: var(--tp, 3px);
  position: absolute;
  background: var(--paper-lines);
  box-shadow: 0 12px 0 0 var(--paper-lines), 0 24px 0 0 var(--paper-lines);
}

.continue-application > div .folder .paper:after {
  --tp: 6px;
  --wp: 10px;
}

.continue-application > div .pencil {
  height: 2px;
  width: 3px;
  border-radius: 1px 1px 0 0;
  top: 8px;
  left: 105%;
  position: absolute;
  z-index: 3;
  transform-origin: 50% 19px;
  background: var(--pencil-cap);
  transform: translateX(var(--pex, 0)) rotate(35deg);
  transition: transform 0.4s ease var(--pbd, 0s);
}

.continue-application > div .pencil:before, .continue-application > div .pencil:after {
  content: "";
  position: absolute;
  display: block;
  background: var(--b, linear-gradient(var(--pencil-top) 55%, var(--pencil-middle) 55.1%, var(--pencil-middle) 60%, var(--pencil-bottom) 60.1%));
  width: var(--w, 5px);
  height: var(--h, 20px);
  border-radius: var(--br, 2px 2px 0 0);
  top: var(--t, 2px);
  left: var(--l, -1px);
}

.continue-application > div .pencil:before {
  -webkit-clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
  clip-path: polygon(0 5%, 5px 5%, 5px 17px, 50% 20px, 0 17px);
}

.continue-application > div .pencil:after {
  --b: none;
  --w: 3px;
  --h: 6px;
  --br: 0 2px 1px 0;
  --t: 3px;
  --l: 3px;
  border-top: 1px solid var(--pencil-top);
  border-right: 1px solid var(--pencil-top);
}

.continue-application:before, .continue-application:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  border-radius: 1px;
  background: var(--color);
  transform-origin: 9px 1px;
  transform: translateX(var(--cx, 0)) scale(0.5) rotate(var(--r, -45deg));
  top: 26px;
  right: 16px;
  transition: transform 0.3s;
}

.continue-application:after {
  --r: 45deg;
}

.continue-application:hover {
  --cx: 2px;
  --bg: var(--background-hover);
  --fx: -40px;
  --fr: -60deg;
  --fd: .15s;
  --fds: 0s;
  --pbx: 3px;
  --pby: -3px;
  --pbd: .15s;
  --pex: -24px;
}

`
const LeftComponent = () => {
    const { openModal } = useContext(ModalContext);
    return (
        <StyledLeftComponent>
            <ContentContainer>
                <Logo src={logo} alt="" /> 
                <MainHeading> <span>
<button>
𝕍𝕠𝕣𝕥𝕖𝕩 ℂ𝕠𝕕𝕖
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button></span> </MainHeading>
                <SubHeading>𝕮𝖔𝖉𝖊.𝕮𝖔𝖒𝖕𝖎𝖑𝖊.𝕯𝖊𝖇𝖚𝖌.</SubHeading>
                <AddNewButton onClick={() => openModal({
                    show: true,
                    modalType: 3,
                    identifiers: {
                        folderId: "",
                        cardId: "",
                    }
                })}>
                <button class="continue-application">
                    <div>
                        <div class="pencil"></div>
                        <div class="folder">
                            <div class="top">
                                <svg viewBox="0 0 24 27">
                                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                </svg>
                            </div>
                            <div class="paper"></div>
                        </div>
                    </div>
                    Creat New PlayGround
                </button></AddNewButton>
            </ContentContainer>
        </StyledLeftComponent>
    )
}

export default LeftComponent