import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Worldwide tracking',
    description:
      'Whether you are in the US or in Europe, we can track anomalies from anywhere. We have a global network of sensors and satellites available 24/7.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Justice for all',
    description:
      "Halls of justice painted green - Money talking - Power wolves beset your door - Hear them stalking - Soon you'll please their appetite - They devour - Hammer of justice crushes you overpower",
    icon: ScaleIcon,
  },
  {
    name: 'Thunderstruck',
    description:
      "You've been - Thunderstruck, thunderstruck - Yeah, yeah, yeah, thunderstruck - Ooh, thunderstruck, yeah",
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Receive instant notification of justice delivered by thunderstrucking your enemies. See them driven before you',
    icon: DevicePhoneMobileIcon,
  },
];

export const AboutPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">
            Anomaly Detection Agency
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to track anomalies
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            At ADA we are dedicated to helping you track anomalies in the
            multi-verse.
          </p>
          <p className="mx-auto text-xs text-gray-400">(We also rent cars)</p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
