# Welcome to REACT! Clone Coding _ develog |  π
![]()
βΆοΈ[Go to preview video](https://youtu.be/1ZlV49kN6xw)
βΆοΈ[Go to Project](https://hanghae-7-w-clone.vercel.app//)

## π νμ΄μ§ μκ°
μ€μ  μλΉμ€ μ€ νλλ₯Ό μ νν΄μ, ν΄λΉ μλΉμ€λ₯Ό CRUD κ³Όμ μ ν¬ν¨νμ¬ μ§μ  κ΅¬ν
- Sign up/in/out (Response Headerλ‘ Token μ λ¬λ°μμ μΏ ν€μ μ μ₯ λ° μ­μ )
- List (propsλ₯Ό μ΄μ©ν΄μ μ»΄ν¬λνΈ μ¬μ¬μ©νλ©΄μ map()μΌλ‘ λ¦¬μ€νΈ κ΅¬μ±, μΉ΄νκ³ λ¦¬ λΆλ₯-νΈλ λ(μ’μμμ), μ΅μ (μκ°μ))
- Detail (μ κΈ μμ±/μμ /μ­μ μ λκΈ μμ±/μμ /μ­μ /μ‘°νλ‘ CRUD κ΅¬μ±)
- Search (κ²μμ°½μ ν΅ν΄ μνλ μ‘°κ±΄μ λ§μ‘±νλ λ°μ΄ν°λ₯Ό λ°μμμ λΈλΌμ°μ μ λ λλ§)
- MyPage (λ³ΈμΈμ΄ μ΄ κΈκ³Ό νλ‘νλ§ λͺ¨μμ λ³΄λ κ°μΈνλ νμ΄μ§, userIdλ‘ μ¬μ©μ νΉμ νμ¬ url μ€μ )
<br>

## π κΈ°μ  μ€ν
> CSS (Styled Component) / REACT(JS, JSX) / Redux(@Toolkit) / vercel <br>

## π μ»΄ν¬λνΈ κ΅¬μ± λ° WF
![]()
<details>
<summary>WireFrame</summary>
<div markdown="1">       
  
![](https://bit.ly/3FGuSRt)
![](https://bit.ly/3hbPTcw)
![](https://bit.ly/3ftr4se)
![](https://bit.ly/3UkQ4Rb)
![](https://bit.ly/3fwWKwM)
![](https://bit.ly/3UjBLfN)
![](https://bit.ly/3U7AMQ7)

</div>
</details>

![]()
<details>
<summary> Project Tree </summary>
<div markdown="1">

![] (
  ```
Hanghae-7W-Clone
ββ README.md
ββ src
β  ββ components
β  β  ββ assets
β  β  β  ββ detailHeaderLogo.png
β  β  β  ββ fonts
β  β  β  β  ββ FiraMono-Bold.woff
β  β  β  β  ββ FiraMono-Medium.woff
β  β  β  β  ββ FiraMono-Regular.woff
β  β  β  β  ββ fonts.js
β  β  β  β  ββ NotoSans-Black.woff
β  β  β  β  ββ NotoSans-Bold.woff
β  β  β  β  ββ NotoSans-Medium.woff
β  β  β  β  ββ NotoSans-Regular.woff
β  β  β  ββ GlobalStyle.jsx
β  β  ββ detail
β  β  β  ββ CommentCard.jsx
β  β  β  ββ CommentContainer.jsx
β  β  β  ββ CommentForm.jsx
β  β  β  ββ CommentList.jsx
β  β  β  ββ DetailContainer.jsx
β  β  ββ elements
β  β  β  ββ Box.jsx
β  β  β  ββ Button.jsx
β  β  β  ββ Grid.js
β  β  β  ββ Input.jsx
β  β  β  ββ Text.jsx
β  β  ββ features
β  β  β  ββ Content.jsx
β  β  β  ββ LikeList.jsx
β  β  β  ββ List.css
β  β  β  ββ Post.jsx
β  β  β  ββ PostItem.jsx
β  β  β  ββ PostList.jsx
β  β  β  ββ SearchList.jsx
β  β  β  ββ TimeList.jsx
β  β  ββ Layout
β  β  β  ββ Footer.css
β  β  β  ββ Footer.jsx
β  β  β  ββ Grid.jsx
β  β  β  ββ Header.css
β  β  β  ββ Header.jsx
β  β  β  ββ MyPageHeader.css
β  β  β  ββ MyPageHeader.jsx
β  β  ββ modal
β  β  β  ββ Login.jsx
β  β  β  ββ Modal.js
β  β  β  ββ Portal.js
β  β  β  ββ Potal.js
β  β  β  ββ Signup.jsx
β  β  ββ update
β  β     ββ UpdateContent.jsx
β  β     ββ UpdateForm.jsx
β  ββ hooks
β  β  ββ useConfirm.jsx
β  β  ββ useInput.jsx
β  ββ index.js
β  ββ index.scss
β  ββ logo.svg
β  ββ pages
β  β  ββ DetailPage.jsx
β  β  ββ Editor.jsx
β  β  ββ Home.jsx
β  β  ββ MyPage.css
β  β  ββ MyPage.jsx
β  β  ββ Search.jsx
β  β  ββ UpdatePage.jsx
β  β  ββ Write.jsx
β  ββ redux
β  β  ββ config
β  β  β  ββ configureStore.js
β  β  ββ modules
β  β     ββ cmtSlice.js
β  β     ββ imageSlice.js
β  β     ββ listSlice.js
β  β     ββ mypageSlice.js
β  β     ββ postSilice2.js
β  β     ββ postSlice.js
β  β     ββ postSlice2.js
β  β     ββ searchSlice.js
β  β     ββ userSlice.js
β  ββ reportWebVitals.js
β  ββ router
β  β  ββ App.css
β  β  ββ App.js
β  β  ββ routes
β  β  β  ββ routes.js
β  β  ββ routes.js
β  ββ serviceWorker.js
β  ββ setupTests.js
β  ββ shared
β     ββ Apis.js
β     ββ Cookie.js
ββ yarn.lock

```
)
</div>
</details>
<br>


## π κ΅¬ν κΈ°λ₯
### 1. Sign-up / in / out (Create)
- Create : axios.post λ‘ μλ²μ onChangeκ°μ λκ²¨μ£Όλ©΄μ cross-checkλ‘ νλ‘ νΈλ validation ν μ΄ν, μλ²λ‘λΆν° Token μ λ¬ λ°μμ λ‘κ·ΈμΈ μν μ μ§
- Validation : μ κ·ννμμ μ¬μ©νμ¬ μλ¦Ώμ, λ/μλ¬Έμ νΉμ νΉμλ¬Έμλ± μλ²μ κ³΅ν΅μ μΌλ‘ κ²°μ ν λ°©μμΌλ‘ ID/PW μμ±<br>
γ΄ μ κ·ννμ μ‘°κ±΄μ μΆ©μ‘±νμ§ μμ κ²½μ°, inputμ°½ μλμ ν΄λΉ μ‘°κ±΄μ λ§μ‘±νμ§ μλλ€λ eventλ₯Ό λΈμΆνμ¬ μ¬μ©μμκ² μλ¦Ό

### 2. Posting List page (Read)
- Read : GETλ°©μμΌλ‘ μλ²μμ response μ λ¬λ°μ λ΄μ©μΌλ‘ λΈλΌμ°μ μ λ λλ§νμ¬ κ΅¬ν. μΉ΄νκ³ λ¦¬λ₯Ό λλμ΄, μ£Όμ΄μ§ μ‘°κ±΄μ λ§λλ‘ filteringν mapμΌλ‘
        λΈλΌμ°μ μ μ»΄ν¬λνΈ κ΅¬νλλλ‘ ν¨. propsλ₯Ό ν΅ν΄ νΈλ λ/μ΅μ  λ κ°μ§ μΉ΄νκ³ λ¦¬μ λ¦¬μ€νΈλ€μ Content.jsxλ₯Ό μ¬μ¬μ©νμ¬ κ°κ°μ λ¦¬μ€νΈλ€μ λνλκ² ν¨.

### 3. Detail page (Read & Update) & Comments (CRUD)
- Read : Main pageμμ Listμ μ λͺ© νΉμ μ¬μ§μ ν΄λ¦­νλ©΄ κ°λ³ κ²μλ¬Ό μ‘°νλ‘ μ΄λ. POST μμ²­μΌλ‘ onChangeλ‘ λ°μ κ°κ³Ό, μ΄λ―Έμ§ νμΌμ form-dataμ μ€μ΄μ
        enctypeμΌλ‘ μλ²μ μ λ¬ν¨.
- Update : axios.patchλ‘ todo.body λ°μ΄ν° μμ  (thunk, redux, useEffect, dispatch)
- Comment(CRUD) : ν΄λΉ κ²μλ¬Όμ μμ΄λκ°μ ν€κ°μΌλ‘ κ°λ κΈ°μ‘΄ todoListμ²λΌ crud κ΅¬ν

### 4. Search (Read)
- Read : GETμΌλ‘ μ λ¬λ°μ μ λ³΄λ₯Ό λ°μμμ, μ¬μ©μκ° κ²μμ°½μ μλ ₯ν onChange valueλ₯Ό κ°μ§κ³ , μνλ κ²μκ²°κ³Όλ₯Ό νν°λ§νμ¬ λΈλΌμ°μ μ λ λλ§

### 5. My-Page (Read)
- Read : userIdλ‘ κ°μΈμ ν¬μ€ν μ λ³΄λ₯Ό κ°μ Έμμ λ³ΈμΈλ§ μ κ·Όν  μ μλ νμ΄μ§μμ μμ μ κ²μλ¬Όμ κ΄λ¦¬, κ°μΈ νλ‘ν μμ  λ° κ΄λ¦¬ κ°λ₯

### 6. Env (Enviroment Variable)
- κ°λ° λͺ¨λμ λ°°ν¬λͺ¨λλ₯Ό λλ  κ°λ°λͺ¨λμΌλλ§ redux devtoolμ΄ λ³΄μ΄λλ‘ κ΅¬ννκ³  apiμ urlμ νκ²½λ³μλ‘ μ§μ νμμ΅λλ€.

### 7. Custom Hook
- useStateμ onChangeνΈλ€λ¬λ₯Ό μΆκ°ν useInputνμ λ§λ€μμ΅λλ€.
- Global Styled-componentλ₯Ό μ΄μ©νμ¬ μ»΄ν¬λνΈμ μ¬μ¬μ©μ±μ λμΈ λ²νΌ μ»΄ν¬λνΈ νμ©

### 8. Redux toolkit νμ© (thunkAPI)
- κΈ°μ‘΄ λ³΄λ€ μ½λλμ μ€μ΄κ³  λ―Έλ€μ¨μ΄ κ°λμ ν΅ν΄ λ¦¬λμλ₯Ό λΉλκΈ° μ²λ¦¬νλλ°©λ²μ μκ²λμμ΅λλ€. Axiosλ₯Ό ν΅ν΄ λ―Έλ€μ¨μ΄λ₯Ό νμ©ν λΉλκΈ° μ²λ¦¬κ³Όμ μμ κΈ°μ΄μ μΈ Async-await κ΅¬λ¬Έμμ λ λμκ°μ μΈμ€ν΄μ€ν μμΌμ μ½λλ₯Ό κ°μν μν€κ³  κ°λμ±μ λμμ΅λλ€.

### 9. json-server - Mock server λ°°ν¬
- Back-endμ APIμμμ΄ μλ£λμ§ μμμλμ μν©μ κ°μ νμ¬ json-serverλ₯Ό μ΄μ©νμ¬ κ°λ¨ν nosql Mock μλ² κ΅¬μ±, μλ²λ‘ λ€μ΄κ°λ DBλ€μ΄ JSON νμμΌλ‘ μ λλ‘ λ€μ΄κ°κ³  μλμ§ λ―Έλ¦¬ νμΈνλ―λ‘μ¨ μ λ¬ ννλ₯Ό λ―Έλ¦¬ μΌμΉμν€λ μμκ³Ό ν¨κ», μ§λ ¬νλμ§ μμ λ°μ΄ν°λ€μ json.stringifyλ₯Ό ν΅ν΄ objectλ₯Ό string typeμΌλ‘ λ³κ²½μμΌμ μ λ¬νλ―λ‘μ¨ API λͺμΈμλ₯Ό μ ννκ² κ΅¬ννκ³ μ νμ΅λλ€.

### 10. Redux devtool λΉνμ±ν μ²λ¦¬

<br>

## π λμμΈ & css
### Styled Components : λ§λ₯ λ²νΌ
- **μ‘°κ±΄λΆ Styled Components `props` μ¬μ©νκΈ° :** <br>
Todo μ»΄ν¬λνΈμ <Todobox />`border, color μμλ₯Ό isdoneμ valueμ λ°λΌ λ€λ₯΄κ² μ μ©λλλ‘ props νμ©
- **`props.children` μ νμ©ν λ§λ₯ λ²νΌ μ»΄ν¬λνΈ κ΅¬μ±** <br>
λͺ¨λ  νλ‘μ νΈμ μ μ© κ°λ₯ν νΉμ μ€νμΌλ§ μμ νμ¬ νμ©κ°λ₯ν  μ λλ‘ κ΅¬ννμ§λ μμμΌλ,<br>
νλ‘μ νΈ λ³Όλ₯¨μ λ§μΆ color / size μμ±μ νμ©ν  μ μλ μ»΄ν¬λνΈλ‘ κ΅¬μ±

### Portalλ‘ Modal κ΅¬ν
- App.js λ°λ‘ νμμ Modal μ»΄ν¬λνΈλ₯Ό λ§λ€μ΄μ μ μ­μν(Boolean)λ₯Ό ν΅ν΄ show/hideνλ λͺ¨λ¬μ μμ±νμ΅λλ€.
- μ¬μ©μμ μμ₯μμ κ³μλλ νμ΄μ§ λ λλ§μ μ€μ΄κΈ° μν΄ λͺ¨λ¬ λ΄μμ νμκ°μκ³Ό λ‘κ·ΈμΈ μ λ³΄λ€μ μλ ₯ν  μ μλ μ°½μ λͺ¨λ¬λ‘ κ΅¬ννμ΅λλ€.
- λͺ¨λ¬μ μ»€μ€ν νμ μ¬μ©ν΄μ μ€μ  μλΉμ€μ κ°μ₯ μ μ¬νκΈ° κ΅¬ννλ €κ³  νμ΅λλ€.

<br>

## π λ°°μ΄μ  & μμ¬μ΄μ 
### λ°°μ΄μ π
<κΈ°μ¨ @joyfive>
- **Potalμ νμ©ν Modal κ΅¬ν**
cssμ `display : block;` `display : none;` μ νμ©νμ¬ κ°λ³ μ»΄ν¬λνΈλ§λ€ stateλ₯Ό μ μΈνκ³  λΈμΆμ¬λΆλ₯Ό κ²°μ ν΄μλλ°, potalμ νμ©ν¨μΌλ‘μ¨ μ μ­μνλ₯Ό ν΅ν΄ μ¬λ¬ μ»΄ν¬λνΈμμ νμ©νλ λ°©μμ λ°°μ μ΅λλ€.<br>

- **Styled Componentsμ μ¬μ¬μ©μ±** 
κΈ°μ‘΄μ styled componentsλ₯Ό νμ©νλ©΄μ μ κ·Ήμ μΈ μ¬μ¬μ©μ νλ λ°©μμ΄ μ΅μμΉ μμμλλ°, μ¬μ¬μ© κ°λ₯ν λ§λ₯λ²νΌ μ»΄ν¬λνΈλ₯Ό λ§λ€μ΄ μν¬νΈν λ λλΉκ°, μ»¬λ¬ λ±μ μ»€μ€νν΄μ μ¬μ©νλ μ€νμΌλ μ»΄ν¬λνΈμ μ¬μ¬μ©μ±μ μ΄ν΄νκ² λμμ΅λλ€. <br>   

- **κΌΌκΌΌν Validation** 
νμκ°μ, λ‘κ·ΈμΈ ννΈμμ νλ‘ νΈμλμ κ½! λ²¨λ¦¬λ°μ΄μμ κΌΌκΌΌνκ² μ μ©ν΄λ³΄μμ΅λλ€. μμ΄λ μ¬μ©κ°λ₯μ¬λΆ, μ κ·μ, λΉλ°λ²νΈ νμΈ λ±μ κΌΌκΌΌν λ²¨λ¦¬λ°μ΄μμ ν΅ν΄ μ¬μ©μκ° μ€λ₯λ₯Ό λ°μμν€μ§ μλλ‘ κ°μ΄λλ₯Ό μ κ³΅ν©λλ€.<br>
  <br>

<br>

<μ§μ€ @verocony>
- ** ** <br>
 

- ** ** <br>

<λ―Όμ§ @minzzjo>
- **CRUD κΈ°λ₯ κ΅¬ν make-up** 
λ¦¬λμ€ ν΄ν·μ νμ©νμ¬ Axiosλ₯Ό ν΅ν GET/POST/DELETE/PUT λ°©μμ DBμ μ‘ κ³Όμ μ μ§μ  μ μ©ν΄ λ³΄κ³  μ€νν  μ μκ² λμλ€.<br>

- **νμμ μλμ§**
μ§λ λͺ μ£Όκ° κ°μΈκ³Όμ λ₯Ό κ³μν΄μ μ§νν΄ μ€λ©΄μ, νΌμμ λͺ¨λ  κ³Όμ μ κ³ννκ³  ν΄κ²°νλ κ³Όμ μμ λ§μ μ΄λ €μμ κ²ͺμκ³ , ν¨κ» μλ°μ λ§μΆ°μ μ΅μ’ κ²°κ³Όλ¬Όμ λ΄λ λ° μμ΄μ λ²κ±°μμ΄ μμλ€. μ΄λ² μ£Όμ°¨μμλ κ·Έλμ κ°μ ν΄μΌ νλ€κ³  μκ°νλ νμκ³Ό μν΅μ μ€μμ±μ κ³μ μκΈ°μν€λ©΄μ νμ μΌμμΌλ‘μ λͺ¨λκ° λΈλ ₯ν κ²°κ³Όλ¬Όμ λ§λ€μ΄ λ΄κΈ° μν΄ λ νμ λ΄μ μ΄μ¬ν νλ €κ³  μ μΌλ€. νΌμ λ³΄λ€λ κ°μ΄ λ¬΄μΈκ°λ₯Ό ν΄ λΈλ€λ κ²μ΄ μΌλ§λ μ€μνμ§λ₯Ό μ λ§ λ§μ΄ λλ μ μμλ€.<br>


### μμ¬μ΄μ π
<κΈ°μ¨ @joyfive>
- **μκ°κ΄λ¦¬ μ€ν¨**
 μ€μ  νλ‘μ νΈμ λ€μ΄κ°κΈ°μ μμ λ―Έλ λ¨μμ λ§μ§λ§ νλ‘μ νΈμ΄λ€λ³΄λ, νμλ€ λͺ¨λκ° κ°κ°μΈμ λ΄λΉννΈλ₯Ό λκΉμ§ κ΅¬νν΄λ³΄λ κ²μ λͺ©νλ‘ μ§ννλ€λ³΄λ λͺ©ννλ λ°°ν¬ μ€λΉ μκ°μ λκΈ°λλ‘ κ°λ°μμμ΄ μ΄μ΄μ‘μ΅λλ€. 
<br>λ€λ¦κ² λ°°ν¬λ₯Ό μ§νν λκ° λμ΄μμΌ λΈλ λͺ¨λκ³Ό λΌμ΄λΈλ¬λ¦¬μ μΆ©λλ‘ λ°°ν¬μ΄μκ° μλ λΆλΆμ νμΈνμ¬ κ²°κ΅­ httpsκ° μλ λ‘μ»¬λ‘ μμ°μ νκ² λμ΄ μμ¬μμ΄ λ¨μ΅λλ€. 
<br>μ€μ  νλ‘μ νΈμμλ μΌμ  μ΄μκ° λ°μνμ§μλλ‘ λ°λλΌμΈμ λκΈ°λ κ²½μ° κ³Όκ°νκ² κΈ°λ₯μ ν¬κΈ°νκ³ , μΌμ μ μμν  μ μλλ‘ μ κ·Ήμ μΌλ‘ μΌμ κ΄λ¦¬λ₯Ό ν΄μΌν  κ² κ°μ΅λλ€.<br>

γ΄ 
<br>

<μ§μ€ @verocony>
- ** ** <br>
 

- ** ** <br>

<λ―Όμ§ @minzzjo>
- **κΈ°λ³Έμ μΈ CRUDκ΅¬νκ³Ό λλΆμ΄ μΆκ° κΈ°λ₯ κ΅¬ν** 
GET λ°©μμΌλ‘ λ°μ΄ν°λ₯Ό λΆλ¬μμ λ λλ§ νλ κ³Όμ μ΄ λ§μμ΄μ, λ€λ₯Έ λΆλΆμ ν΄ λ΄μ§ λͺ»νκ² μμ½λ€. μ‘°κΈ λ μ€μ  νλ‘μ νΈλ₯Ό μν΄ λ―Έλ¦¬ μ΅νκ³  κ°μΌ ν  κΈ°λ₯λ€μ μμ ν λ΄ κ²μΌλ‘ λ§λ€μ΄λ³΄κ³  μνμ°©μ€λ₯Ό λ λ§μ΄ κ²ͺμ§ λͺ»ν΄ μμ½λ€.<br>
 

- **μλ² μ°κ²° λ° λ°°ν¬ κ³Όμ μμμ λλ°μν© λμ² λ―Έν‘** 
μ§λ μ£Όμ°¨λ₯Ό κ²ͺμΌλ©°, μ μΆ λΉμΌμλ μ΄λ€ κΈ°λ₯κ΅¬νκ³Ό νΌλΈλ¦¬μ±μ νμ§ μκ³  μ€λ‘―μ΄ λ°°ν¬μλ§ μ§μ€ν΄μΌ μ΅λν μ€λ₯λ€μ λ€ λ³΄μν κ²°κ³Όλ¬Όμ λΌ μ μλ€λ κ±Έ λκΌμ§λ§, κΈ°λ₯κ΅¬νμ κΌ­ μμ±ν΄ λ³΄κ³  μΆλ€λ μμ¬μ΄ μ»€μ ν° μ€μ½νκ° μλμμμλ κ΅¬ν κ³Όμ μ΄ μ€λ κ±Έλ Έκ³  κ·Έλ‘ μΈν΄ λλ²κΉ λ° λ°°ν¬ κ³Όμ μ΄ λ§μ΄ λ―Έλ€μ Έμ μμ½λ€. λͺ¨λ  μΌμ μ ν΄μ§ κΈ°νμ΄ μκ³ , μ£Όμ΄μ§ μκ° μμ ν΄κ²°ν΄ λ΄λ κ²μ΄ μ€μνκΈ° λλ¬Έμ μκ°κ΄λ¦¬λ₯Ό μ νλ©΄μ μ νκ³Ό μ§μ€μ μ μ νκ² νλ©΄μ μ§νν΄ λκ°μΌ ν  κ² κ°λ€.<br>

<br>

## μ§λμ²΄ν¬
### μ΄μ  λͺ©ν : *Success!*<br> 
1. ~~κΈ°λ³Έ CRUD κ΅¬ν make-up~~<br>
2. ~~λ§μ§λ§ μ μΆ μ μ CSSμμ± ν μ΅μ’ κΈ°λ₯κ΅¬ν νμ€νΈ λ° λ°°ν¬~~<br>


Copyright 2022. hang-hae99 9th W7 team C1. all rights reserved.

<!-- ## ν­ν΄ 99 ν΄λ‘ μ½λ© : νλ‘ νΈμλ --! >
