import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "@/components/ui/sonner"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }).min(1, { message: "Email is required." }),
  summary: z.string().min(1, { message: "Summary is required." }),
  description: z.string().optional(),
  whereEncountered: z.array(z.string()).optional(),
  attachments: z.any().optional(),
})

const whereOptions = [
  "TradeTrust Reference Website",
  "TradeTrust Documentation Website", 
  "TradeTrust Gallery",
  "TradeTrust Library",
  "TrustVC Website",
  "OpenCerts Website",
  "TrustVC SDK"
]

export default function Support() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      summary: "",
      description: "",
      whereEncountered: [],
      attachments: undefined,
    },
  })

  const navigate = useNavigate()

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission - in real app, send to API
    console.log(values)
    
    // Simulate success/failure for testing (80% success)
    const isSuccess = Math.random() > 0.2
    if (isSuccess) {
      navigate("/support/success")
    } else {
      navigate("/support/error")
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Support{" "}
            <span className="bg-gradient-trust bg-clip-text text-transparent">
              Request
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get help with TrustVC products and services. 
            We'll get back to you as soon.
          </p>
        </div>

        <Card className="bg-background/50 backdrop-blur-glass border border-border/50 max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
              <CardHeader>
                <CardTitle className="text-2xl">Submit a Request</CardTitle>
                <CardDescription>
                  Fill out the form below to create a new support ticket.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Summary <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of your issue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide more details about the issue..." 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whereEncountered"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Where was this encountered?</FormLabel>
                        <div className="space-y-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {whereOptions.map((option) => (
                              <FormItem
                                key={option}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), option])
                                        : field.onChange(
                                            (field.value || []).filter((value) => value !== option)
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {option}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attachments"
                    render={() => (
                      <FormItem>
                        <FormLabel>Attachment</FormLabel>
                        <FormControl>
                          <div className="border-2 border-dashed border-border rounded-md p-6 text-center hover:border-primary transition-colors">
                            <Input 
                              type="file" 
                              multiple 
                              className="hidden"
                              id="attachments"
                              onChange={(e) => {
                                // Mock handle files
                                const files = e.target.files
                                if (files) {
                                  console.log('Selected files:', Array.from(files))
                                }
                              }}
                            />
                            <label 
                              htmlFor="attachments" 
                              className="cursor-pointer flex flex-col items-center justify-center"
                            >
                              <div className="w-12 h-12 mx-auto mb-4 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
                                {/* Icon or text */}
                                <span className="text-gray-500">📎</span>
                              </div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">
                                Drag and drop files, paste screenshots, or browse
                              </p>
                              <p className="text-xs text-muted-foreground mb-2">
                                Please provide screenshot of the issue/error
                              </p>
                              <Button type="button" variant="outline" size="sm">
                                Browse
                              </Button>
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-trust hover:opacity-90"
                    disabled={form.formState.isSubmitting}
                  >
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}