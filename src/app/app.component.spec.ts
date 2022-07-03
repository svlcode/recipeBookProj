import { AppComponent } from "./app.component"

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('should have a title "recipes-project"', () => {
    expect(fixture.title).toBe('recipes-project');
  });
})