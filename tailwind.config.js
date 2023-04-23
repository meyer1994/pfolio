import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Monospace', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
