const NEXTJS_DATA_FETCHING = {
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {
        "level": 2
      },
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "Introduction"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "textStyle",
              "attrs": {
                "color": "rgb(209, 213, 219)"
              }
            }
          ],
          "text": "When I started to learn Next.js, I got overwhelmed with the list of abbreviations that looks similar, I didn't know what it is and what is the difference. It is quite confusing because when using Create React App, we usually only use 1 strategy to fetch data from API which is using "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "code"
            }
          ],
          "text": "useEffect"
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "textStyle",
              "attrs": {
                "color": "rgb(209, 213, 219)"
              }
            }
          ],
          "text": "."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "textStyle",
              "attrs": {
                "color": "rgb(209, 213, 219)"
              }
            }
          ],
          "text": "Next.js has many data fetching strategies. Although initially Next.js was well known to be a Server-Side Rendering Framework, it turns out that Next.js has 4 methods of Data Fetching. Here is the short explanation each so you get familiar with the abbreviation of CSR, SSR, SSG, ISR."
        }
      ]
    },
    {
      "type": "bulletList",
      "attrs": {
        "tight": true
      },
      "content": [
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "CSR - Client-Side Rendering, this is the usual kind of data fetching using "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "code"
                    }
                  ],
                  "text": "useEffect"
                },
                {
                  "type": "text",
                  "text": ", it will fetch the data from the API every single page request on the "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "client-side"
                },
                {
                  "type": "text",
                  "text": " (after the page is rendered, then the function will run)."
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "SSR - Server-Side Rendering, will run a "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "special function"
                },
                {
                  "type": "text",
                  "text": " to fetch data from API every page request on the "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "server-side"
                },
                {
                  "type": "text",
                  "text": " (before the page is loaded, that special function will run first, creating a delay, then after that, it will serve the page)"
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "."
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "SSG - Static Site Generation, will run a "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "special function"
                },
                {
                  "type": "text",
                  "text": " to fetch data "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "once"
                },
                {
                  "type": "text",
                  "text": " when that page builds."
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "ISR – Incremental Static Regeneration, this is a new thing, shortly put, a combination of SSG, and SSR, where it served statically, but at a "
                },
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "certain time and certain condition"
                },
                {
                  "type": "text",
                  "text": " that page will rebuild and fetch the data from the API again."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "textStyle",
              "attrs": {
                "color": "rgb(209, 213, 219)"
              }
            }
          ],
          "text": "Don't worry if you didn't get that, because I will be explaining it thoroughly, just familiarize the words first."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "I mentioned before that there is a special function that will run when using a specific data fetching method. Keep that in mind as I will show you what is that special function."
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "This code example will fetch a date-time from an API using axios, then render it on the page. It is useful to see the date-time so we can truly know when the API is hit."
        }
      ]
    },
    {
      "type": "heading",
      "attrs": {
        "level": 2
      },
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "Client-Side Rendering (CSR)"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "textStyle",
              "attrs": {
                "color": "rgb(209, 213, 219)"
              }
            }
          ],
          "text": "Special Function: "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "code"
            }
          ],
          "text": "useEffect"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "link",
              "attrs": {
                "href": "https://next-render.theodorusclarence.com/render/csr",
                "target": "_blank",
                "class": "animated-underline custom-link inline-flex items-center font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 border-b border-dotted border-dark hover:border-black/0 cursor-newtab"
              }
            },
            {
              "type": "bold"
            },
            {
              "type": "textStyle",
              "attrs": {
                "color": "#008A00"
              }
            }
          ],
          "text": "Demo Site"
        }
      ]
    },
    {
      "type": "heading",
      "attrs": {
        "level": 3
      },
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "Code Example"
        }
      ]
    },
    {
      "type": "codeBlock",
      "attrs": {
        "language": null
      },
      "content": [
        {
          "type": "text",
          "text": "export default function CSRPage() {\n  const [dateTime, setDateTime] = React.useState<string>();\n\n  React.useEffect(() => {\n    axios\n      .get('https://worldtimeapi.org/api/ip')\n      .then((res) => {\n        setDateTime(res.data.datetime);\n      })\n      .catch((error) => console.error(error));\n  }, []);\n\n  return (\n    <main>\n      <TimeSection dateTime={dateTime} />\n    </main>\n  );\n}"
        }
      ]
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph"
    }
  ]
}

export default NEXTJS_DATA_FETCHING