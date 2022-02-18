# react-custom-fetch-hook

[![GitHub issues](https://img.shields.io/github/issues/iamrajput/react-custom-hook)](https://circleci.com/gh/ilyalesik/react-fetch-hook)
[![npm version](https://img.shields.io/github/forks/iamrajput/react-custom-hook)](https://img.shields.io/github/forks/iamrajput/react-custom-hook)
[![GitHub stars](https://img.shields.io/github/stars/iamrajput/react-custom-hook)](https://img.shields.io/github/stars/iamrajput/react-custom-hook)

React hook for conveniently use Fetch API. It will take url and the extra header if needed.


```javascript

import useFetch from 'react-custom-fetch-hook'

function CustomHook() {
    const {data,loading} = useFetch('https://quotable.io/quotes',{})
  
    if(loading){
        return <h3>Loading...</h3>
    }
    return (
        <div>
            {data.results.map((result) => (
                   <p key={result._id}>{result.content}</p>
            ))}
        </div>
    )
}

```

*useFetch* accepts the same arguments as *fetch* function.

## Installation

Install it with npm:

```
npm i react-custom-fetch-hook --save
```



### Error handling

The `useFetch` hook returns an `error` field at any fetch exception. 
The `error` field extends [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
and has `status` and `statusText` fields equal to [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

```javascript

function CustomHook() {
  const {data,loading ,error } = useFetch("https://quotable.io/quotes");

  if (error) {
    return <div>
      <p>Code: ${error.status}</p>
      <p>Message: ${error.statusText}</p>
    </div>
  }
};

```


