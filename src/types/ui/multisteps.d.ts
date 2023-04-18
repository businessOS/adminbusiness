interface ISteps {
    icon: JSX.Element
    title: string
    description: string
    state: 'complete' | 'focus' | 'default'
}