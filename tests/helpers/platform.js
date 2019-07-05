export default function getPlatform() {
  const { platformName = '' } = driver.capabilities;

  return platformName.toLowerCase();
}
