import xw from 'xwind'
import ButtonReact from '../components/ButtonReact'
import ButtonStyled from '../components/ButtonStyled'

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
      {/* <ButtonReact>@emotion/react</ButtonReact>
      <ButtonStyled>@emotion/styled</ButtonStyled> */}
      <div css={xw`bg-white`}>
      <div css={xw`mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8`}>
        <div css={xw`relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}>
          <svg
            viewBox="0 0 1024 1024"
            css={xw`absolute top-1/2 left-1/2  -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0`}
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div css={xw`mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left`}>
            <h2 css={xw`text-3xl font-bold tracking-tight text-white sm:text-4xl`}>
              Blyssfull Magick
              <br />
              Start healing today.
            </h2>
            <p css={xw`mt-6 text-lg leading-8 text-gray-300`}>
                Tarrot card readings, palm readings, we do it all...
            </p>
            <div css={xw`mt-10 flex items-center justify-center gap-x-6 lg:justify-start`}>
              <a
                href="#"
                css={xw`rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 `}
              >
                Get started
              </a>
              <a href="#" css={xw`text-sm font-semibold leading-6 text-white`}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div css={xw`relative mt-16 h-80 lg:mt-8`}>
            <img
              css={xw`absolute top-0 left-0 max-w-none rounded-md ring-1 `}
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
)

export default Index
