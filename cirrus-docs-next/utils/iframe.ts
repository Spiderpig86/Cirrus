import { PLAYGROUND_ENDPOINT_MAP } from "../constants/playground"

export function wrapContent(code: string): string {
    return `<link href="${PLAYGROUND_ENDPOINT_MAP['LATEST_VERSION']}" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
<body>${code}</body>`;
}