![LCKView](https://user-images.githubusercontent.com/48503261/230909379-c914044d-a833-49be-8dce-050878cccedc.gif)
<p>LCK뷰는 진행중인 LCK시즌에 대한 정보를 보여주는 사이트입니다.<br>
Next.js를 배워서 사용해보았습니다.</p>
<p>LCK데이터는 네이버e스포츠와 qwer.gg에서 크롤링해옵니다.</p>
<p>3개(일정, 순위, 로스터)의 뷰로 구성되어있으며</p>
<p><img src="https://velog.velcdn.com/images/after7203/post/d85261c5-4052-4b20-a3bf-78f940c450b5/image.png"></p>
<p>일정 page는 요청을 받을때 getServerSideProps에서 경기결과를 크롤링해와서 화면을 구성합니다. (SSR)</p>
<p><img src="https://velog.velcdn.com/images/after7203/post/11dcbd88-e8c0-4691-84ed-589f5d7c068c/image.png"></p>
<p>순위 page는 먼저 SSG로 틀이되는 뷰를 구성 후, useSWR로 순위 정보를 크롤링해서 뷰에 끼워넣습니다. 데이터 fetch전 tailwind animation으로 loading placeholder를 만들어보았습니다.</p>
<p><img src="https://velog.velcdn.com/images/after7203/post/7b62230a-740c-44bd-b9a9-bc384d805135/image.gif"></p>
<p><img src="https://velog.velcdn.com/images/after7203/post/b62ee3ee-171f-4224-b1f9-b9b74b6e7f91/image.png"><br>
<img src="https://velog.velcdn.com/images/after7203/post/6b6d90b0-2cf2-4862-bb2e-8f1baf7ae36a/image.png"></p>
<p>로스터 page는 순수하게 외부 데이터없이 SSG로만 구성됩니다. </p>
<p><img src="https://velog.velcdn.com/images/after7203/post/7d1dadec-fe83-48a1-932d-02b0bd4b6d73/image.png"><br>
<img src="https://velog.velcdn.com/images/after7203/post/a5524161-69a7-4465-ad3d-aea8fc6f621f/image.png"><br>
<img src="https://velog.velcdn.com/images/after7203/post/26f13a83-6d63-4017-a337-85ba7122dc53/image.png"></p>
<p>또한 다크모드와 간단한 반응형 view도 만들어보았습니다.</p>
<p>이번에 nextjs를 배우면서 tailwind를 사용해보았는데 hover, 미디어쿼리, 다크모드등도 클래스네임에 추가하여 간단히 구현할 수 있어서 편했다.</p>
<p><a href="https://github.com/after7203/LCKView">https://github.com/after7203/LCKView</a></p></div>
