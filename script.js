const getData = (dayDreaming) => {
    return new Promise((resolve, reject) => {
          if (dayDreaming.length > 10) {
            setTimeout(() => {
                resolve('DayDreaming');
             }, 5000);
          } else {
            setTimeout (() => {
                reject('This is async function');
            }, 5000 );
          }
        
    })
}
getData(dayDreaming)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log('error');
    }

    )

    