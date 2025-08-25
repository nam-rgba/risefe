import Button from "@/components/element/button/BaseButton"

const Landing = () => {
  return (
    <div>
      <Button variant="primary" size="sm">
        Get Started
      </Button>

      <Button variant="outline" size="md">
        Learn More
      </Button>

      <Button variant="ghost" size="lg">
        Contact Us
      </Button>

    </div>
  )
}

export default Landing