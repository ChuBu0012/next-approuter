# AppRouter Typescript

index.tsx => page.tsx

layoutComponent in \_app.tsx => layout.tsx

## New Page :

    about.tsx => about > page.tsx

## Dynamic Rotuer :

    [id].tsx => report > [id] > page.tsx
    - parameter Dynamic Rotuer => params.id
    - params:{id:string}

## NotfoundPage :

    404.tsx => not-found.tsx

## LoadingPage :

    about > loading.tsx

## Catch Error :

    about > error.tsx
    - parameter => error.message
    - error:{message:string}
    - เวลามี Error จะแสดงผล page นี้

## fetchData Api :

    getServerSideProps => function async
