// Tailwind does not support Dynamic Classes so i created a config to name the colors requested.

const colorConfig: ColorConfigProps = {
  Mercury: {
    color: 'border-blue-light',
    bg_color: 'bg-blue-light',
  },
  Venus: {
    color: 'border-yellow',
    bg_color: 'bg-yellow',
  },
  Earth: {
    color: 'border-purple',
    bg_color: 'bg-purple',
  },
  Mars: {
    color: 'border-orange-200',
    bg_color: 'bg-orange-200',
  },
  Jupiter: {
    color: 'border-orange-300',
    bg_color: 'bg-orange-300',
  },
  Saturn: {
    color: 'border-orange-100',
    bg_color: 'bg-orange-100',
  },
  Uranus: {
    color: 'border-green',
    bg_color: 'bg-green',
  },
  Neptune: {
    color: 'border-blue',
    bg_color: 'bg-blue',
  },
};

type ColorConfigProps = {
  [key: string]: {
    color?: string;
    bg_color?: string;
  };
};

export { colorConfig };
